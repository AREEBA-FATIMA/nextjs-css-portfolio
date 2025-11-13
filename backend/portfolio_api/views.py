from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import (
    Profile, HeroSlide, Service, Skill, Project,
    ContactMessage, TechnicalSkill
)
from .serializers import (
    ProfileSerializer, HeroSlideSerializer, ServiceSerializer,
    SkillSerializer, ProjectSerializer, ContactMessageSerializer,
    TechnicalSkillSerializer
)

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

    def create(self, request, *args, **kwargs):
        """Create a new contact message"""
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        instance = serializer.save()
        read = self.get_serializer(instance)
        headers = self.get_success_headers(read.data)
        return Response(
            read.data,
            status=status.HTTP_201_CREATED,
            headers=headers
        )

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

