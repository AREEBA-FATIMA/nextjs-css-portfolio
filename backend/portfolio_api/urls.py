from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ProfileViewSet, HeroSlideViewSet, ServiceViewSet,
    SkillViewSet, ProjectViewSet, ContactMessageViewSet,
    TechnicalSkillViewSet, ContentGenerateView, AnalyticsInsightsView,
    ProjectRecommendationsView, EmailDraftView, SEOAnalyzeView
)

router = DefaultRouter()
router.register(r'profile', ProfileViewSet, basename='profile')
router.register(r'hero-slides', HeroSlideViewSet, basename='hero-slides')
router.register(r'services', ServiceViewSet, basename='services')
router.register(r'skills', SkillViewSet, basename='skills')
router.register(r'projects', ProjectViewSet, basename='projects')
router.register(r'contact', ContactMessageViewSet, basename='contact')
router.register(r'technical-skills', TechnicalSkillViewSet, basename='technical-skills')

urlpatterns = [
    path('', include(router.urls)),
    path('agents/content/generate/', ContentGenerateView.as_view()),
    path('agents/analytics/insights/', AnalyticsInsightsView.as_view()),
    path('agents/recommendations/projects/', ProjectRecommendationsView.as_view()),
    path('agents/email/draft/', EmailDraftView.as_view()),
    path('agents/seo/analyze/', SEOAnalyzeView.as_view()),
]

