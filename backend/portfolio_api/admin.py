from django.contrib import admin
from .models import (
    Profile, HeroSlide, Service, Skill, Project,
    ContactMessage, TechnicalSkill, ContactMessageAnalysis
)


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ['name', 'title', 'email', 'is_active', 'created_at']
    list_filter = ['is_active', 'created_at']
    search_fields = ['name', 'email']


@admin.register(HeroSlide)
class HeroSlideAdmin(admin.ModelAdmin):
    list_display = ['heading', 'sub_heading', 'order', 'is_active', 'created_at']
    list_filter = ['is_active', 'created_at']
    ordering = ['order']


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ['title', 'icon_name', 'color_class', 'order', 'is_active', 'created_at']
    list_filter = ['is_active', 'created_at']
    ordering = ['order']


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ['name', 'percentage', 'color_class', 'order', 'is_active', 'created_at']
    list_filter = ['is_active', 'created_at']
    ordering = ['order']


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'project_type', 'order', 'is_active', 'created_at']
    list_filter = ['is_active', 'project_type', 'created_at']
    ordering = ['order']
    search_fields = ['title', 'description']


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'is_read', 'created_at']
    list_filter = ['is_read', 'created_at']
    search_fields = ['name', 'email', 'subject']
    readonly_fields = ['created_at']
    ordering = ['-created_at']


@admin.register(TechnicalSkill)
class TechnicalSkillAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'order', 'is_active', 'created_at']
    list_filter = ['category', 'is_active', 'created_at']
    ordering = ['category', 'order']


@admin.register(ContactMessageAnalysis)
class ContactMessageAnalysisAdmin(admin.ModelAdmin):
    list_display = ['contact_message', 'intent', 'sentiment', 'priority', 'is_spam', 'created_at']
    list_filter = ['intent', 'is_spam', 'created_at']
    search_fields = ['contact_message__subject', 'contact_message__name', 'sentiment']

