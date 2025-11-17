"""
Script to export database data to JSON file
Run this before deploying to export your local data
Usage: python export_data.py
"""

import os
import sys
import django

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_backend.settings')
django.setup()

from django.core.management import call_command
from django.core import serializers
from portfolio_api.models import Profile, HeroSlide, Service, Skill, Project

def export_data():
    """Export all portfolio data to JSON file"""
    print("📦 Exporting database data...")
    
    # Export all models
    models_to_export = [
        'portfolio_api.Profile',
        'portfolio_api.HeroSlide',
        'portfolio_api.Service',
        'portfolio_api.Skill',
        'portfolio_api.Project',
    ]
    
    try:
        # Use Django's dumpdata command
        with open('portfolio_data.json', 'w', encoding='utf-8') as f:
            call_command('dumpdata', *models_to_export, stdout=f, indent=2)
        
        print("✅ Data exported successfully to: portfolio_data.json")
        print("\n📝 Next steps:")
        print("1. Deploy backend to Railway/Render")
        print("2. Run: python manage.py loaddata portfolio_data.json")
        print("   (Or use Railway CLI: railway run python manage.py loaddata portfolio_data.json)")
        
    except Exception as e:
        print(f"❌ Error exporting data: {e}")
        sys.exit(1)

if __name__ == '__main__':
    export_data()

