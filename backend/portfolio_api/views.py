from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.shortcuts import get_object_or_404
from .models import (
    Profile, HeroSlide, Service, Skill, Project, 
    ContactMessage, TechnicalSkill, ContactMessageAnalysis
)
from .serializers import (
    ProfileSerializer, HeroSlideSerializer, ServiceSerializer,
    SkillSerializer, ProjectSerializer, ContactMessageSerializer,
    TechnicalSkillSerializer, ContactMessageAnalysisSerializer
)
from rest_framework.views import APIView
from rest_framework.request import Request


class ProfileViewSet(viewsets.ReadOnlyModelViewSet):
    """Profile viewset - read only"""
    queryset = Profile.objects.filter(is_active=True)
    serializer_class = ProfileSerializer
    permission_classes = [AllowAny]

    @action(detail=False, methods=['get'])
    def active(self, request):
        """Get active profile"""
        profile = self.queryset.first()
        if profile:
            serializer = self.get_serializer(profile)
            return Response(serializer.data)
        return Response({'detail': 'No active profile found'}, status=status.HTTP_404_NOT_FOUND)


class HeroSlideViewSet(viewsets.ReadOnlyModelViewSet):
    """Hero slides viewset - read only"""
    queryset = HeroSlide.objects.filter(is_active=True)
    serializer_class = HeroSlideSerializer
    permission_classes = [AllowAny]


class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    """Services viewset - read only"""
    queryset = Service.objects.filter(is_active=True)
    serializer_class = ServiceSerializer
    permission_classes = [AllowAny]


class SkillViewSet(viewsets.ReadOnlyModelViewSet):
    """Skills viewset - read only"""
    queryset = Skill.objects.filter(is_active=True)
    serializer_class = SkillSerializer
    permission_classes = [AllowAny]


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    """Projects viewset - read only"""
    queryset = Project.objects.filter(is_active=True)
    serializer_class = ProjectSerializer
    permission_classes = [AllowAny]


class ContactMessageViewSet(viewsets.ModelViewSet):
    """Contact messages viewset"""
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = [AllowAny]

    def perform_analysis(self, instance: ContactMessage) -> None:
        try:
            from .agents.contact_agent import analyze_contact_message
            result = analyze_contact_message(
                name=instance.name,
                email=instance.email,
                subject=instance.subject,
                message=instance.message,
            )
            ContactMessageAnalysis.objects.update_or_create(
                contact_message=instance,
                defaults={
                    'sentiment': result.get('sentiment'),
                    'intent': result.get('intent', 'other'),
                    'priority': result.get('priority', 5),
                    'ai_response_suggestion': result.get('response_suggestion'),
                    'is_spam': bool(result.get('is_spam')),
                }
            )
        except Exception:
            # Fail silently: analysis is optional
            pass

    def create(self, request, *args, **kwargs):
        """Create a new contact message and analyze it"""
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        instance = serializer.save()
        # Kick off analysis (synchronous simple call)
        self.perform_analysis(instance)
        read = self.get_serializer(instance)
        headers = self.get_success_headers(read.data)
        return Response(
            read.data,
            status=status.HTTP_201_CREATED,
            headers=headers
        )

    @action(detail=True, methods=['post'])
    def analyze(self, request, pk=None):
        instance = get_object_or_404(ContactMessage, pk=pk)
        self.perform_analysis(instance)
        analysis = getattr(instance, 'analysis', None)
        if not analysis:
            return Response({'detail': 'Analysis not available'}, status=202)
        data = ContactMessageAnalysisSerializer(analysis).data
        return Response(data, status=200)


class TechnicalSkillViewSet(viewsets.ReadOnlyModelViewSet):
    """Technical skills viewset - read only"""
    queryset = TechnicalSkill.objects.filter(is_active=True)
    serializer_class = TechnicalSkillSerializer
    permission_classes = [AllowAny]

    @action(detail=False, methods=['get'])
    def by_category(self, request):
        """Get skills grouped by category"""
        skills = self.queryset.all()
        grouped = {}
        for skill in skills:
            category = skill.get_category_display()
            if category not in grouped:
                grouped[category] = []
            serializer = self.get_serializer(skill)
            grouped[category].append(serializer.data)
        return Response(grouped)


class ContentGenerateView(APIView):
    permission_classes = [AllowAny]
    def post(self, request: Request):
        from .agents.content_agent import generate_content
        projects = list(Project.objects.filter(is_active=True).values('title','description','project_type','order'))
        profile = Profile.objects.filter(is_active=True).first()
        data = generate_content(projects, profile.name if profile else 'Developer')
        return Response(data, status=200)


class AnalyticsInsightsView(APIView):
    permission_classes = [AllowAny]
    def get(self, request: Request):
        from .agents.analytics_agent import generate_insights
        contacts = list(ContactMessage.objects.order_by('-created_at').values('name','email','subject','created_at')[:100])
        projects = list(Project.objects.filter(is_active=True).values('title','project_type','order'))
        data = generate_insights(contacts, projects)
        return Response(data, status=200)


class ProjectRecommendationsView(APIView):
    permission_classes = [AllowAny]
    def get(self, request: Request):
        from .agents.recommendation_agent import recommend_projects
        projects = list(Project.objects.filter(is_active=True).values('title','live_demo_url','github_url','image_url','project_type','order'))
        recs = recommend_projects(projects, max_items=3)
        return Response({"recommendations": recs}, status=200)


class EmailDraftView(APIView):
    permission_classes = [AllowAny]
    def post(self, request: Request):
        from .agents.email_agent import draft_reply
        name = request.data.get('name','Friend')
        subject = request.data.get('subject','Your message')
        message = request.data.get('message','')
        draft = draft_reply(name, subject, message)
        return Response(draft, status=200)


class SEOAnalyzeView(APIView):
    permission_classes = [AllowAny]
    def post(self, request: Request):
        from .agents.seo_agent import analyze_seo
        pages = request.data.get('pages', [])
        data = analyze_seo(pages if isinstance(pages, list) else [])
        return Response(data, status=200)

