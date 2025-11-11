from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


class Profile(models.Model):
    """Profile information model"""
    name = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    linkedin_url = models.URLField(blank=True, null=True)
    profile_image = models.ImageField(upload_to='profile/', blank=True, null=True)
    about_text_1 = models.TextField()
    about_text_2 = models.TextField(blank=True, null=True)
    vision_text = models.TextField(blank=True, null=True)
    current_focus = models.TextField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Profile"

    def __str__(self):
        return self.name


class HeroSlide(models.Model):
    """Hero section slides model"""
    heading = models.CharField(max_length=200)
    sub_heading = models.CharField(max_length=200)
    paragraph = models.TextField()
    button_text = models.CharField(max_length=100)
    target_section = models.CharField(max_length=50)
    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.heading} - {self.sub_heading}"


class Service(models.Model):
    """Services model"""
    title = models.CharField(max_length=200)
    description = models.TextField()
    icon_name = models.CharField(max_length=100, help_text="Icon name from react-icons")
    icon_library = models.CharField(max_length=50, default="fa", help_text="Icon library: fa, fi, md, etc.")
    color_class = models.CharField(max_length=50, help_text="CSS color class: blue, red, yellow, etc.")
    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title


class Skill(models.Model):
    """Skills model"""
    name = models.CharField(max_length=100)
    percentage = models.IntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(100)],
        help_text="Skill percentage (0-100)"
    )
    color_class = models.CharField(max_length=50, help_text="CSS color class: green, blue, yellow, etc.")
    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.name} - {self.percentage}%"


class Project(models.Model):
    """Projects/Work model"""
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    live_demo_url = models.URLField(blank=True, null=True)
    github_url = models.URLField(blank=True, null=True)
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    image_url = models.URLField(blank=True, null=True, help_text="External image URL if not uploading")
    project_type = models.CharField(max_length=50, default="Website")
    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title


class ContactMessage(models.Model):
    """Contact form messages model"""
    name = models.CharField(max_length=200)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} - {self.subject}"


class TechnicalSkill(models.Model):
    """Technical skills categorized by type"""
    SKILL_CATEGORIES = [
        ('frontend', 'Frontend Development'),
        ('backend', 'Backend Development'),
        ('ai', 'AI & Automation'),
        ('database', 'Database Management'),
        ('tools', 'Tools & Workflow'),
    ]
    
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=50, choices=SKILL_CATEGORIES)
    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['category', 'order']

    def __str__(self):
        return f"{self.get_category_display()} - {self.name}"


class ContactMessageAnalysis(models.Model):
    """AI analysis for contact messages"""
    INTENT_CHOICES = [
        ("job", "Job Opportunity"),
        ("collab", "Collaboration"),
        ("question", "Question"),
        ("other", "Other"),
    ]

    contact_message = models.OneToOneField(ContactMessage, on_delete=models.CASCADE, related_name="analysis")
    sentiment = models.CharField(max_length=20, blank=True, null=True)
    intent = models.CharField(max_length=20, choices=INTENT_CHOICES, blank=True, null=True)
    priority = models.IntegerField(default=5, validators=[MinValueValidator(1), MaxValueValidator(10)])
    ai_response_suggestion = models.TextField(blank=True, null=True)
    is_spam = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Analysis for {self.contact_message.subject}"

