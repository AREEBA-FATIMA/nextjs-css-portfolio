from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ('portfolio_api', '0001_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='ContactMessageAnalysis',
        ),
    ]

