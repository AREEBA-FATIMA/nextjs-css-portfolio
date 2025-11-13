from rest_framework import serializers
from .models import (
    Profile, HeroSlide, Service, Skill, Project,
    ContactMessage, TechnicalSkill
)


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'


class HeroSlideSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroSlide
        fields = '__all__'


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'


class SkillSerializer(serializers.ModelSerializer):
    percentage_display = serializers.SerializerMethodField()

    class Meta:
        model = Skill
        fields = '__all__'

    def get_percentage_display(self, obj):
        return f"{obj.percentage}%"


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'
        read_only_fields = ['created_at']


class TechnicalSkillSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(source='get_category_display', read_only=True)

    class Meta:
        model = TechnicalSkill
        fields = '__all__'

