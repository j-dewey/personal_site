# Generated by Django 5.1 on 2024-08-25 20:16

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("blog", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="blogpost",
            name="preview",
            field=models.CharField(
                default="Oops, somebody forgot to add a preview", max_length=200
            ),
            preserve_default=False,
        ),
    ]
