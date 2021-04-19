# Three Main Types of Model Relationships

# One to One, One to Many, Many to Many

# Example of One to One Relationship
# Users and Primary Addresses (where users may have only one address)

# Examples of One to Many Relationships
# Baseball Team to Baseball Players (One team may have many players, but one player may only have one team)
# Megacorporation to Sub-corporations
# Make to Models

# Examples of Many to Many Relationships
# Actors to Movies (one actor can star in many movies, and one movie may have many actors)
# Books to Authors (one book may be written by many authors, one author may write many books)
# Classes to Students (one class may have many students, and one student may take many classes)

# RDBMS - Relational Database Management System

# Design our databases correctly at the beginning
# Spend a lot of time asking yourself the right questions.

from django.db import models

class BaseballTeam(models.Model):
    name = models.CharField(max_length=45)
    city = models.CharField(max_length=45)
    # baseball_players - a list of the team's players
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class BaseballPlayer(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    position = models.CharField(max_length=45)
    # the relationship for a one to many relationship is ALWAYS defined on the many side
    baseball_team = models.ForeignKey(BaseballTeam, related_name="baseball_players", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Make(models.Model):
    name = models.CharField(max_length=45)
    # models - a list of this make's models
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Model(models.Model):
    name = models.CharField(max_length=45)
    make = models.ForeignKey(Make, related_name="models", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Movie(models.Model):
    title = models.CharField(max_length=45)
    blurb = models.TextField()
    release_date = models.DateTimeField()
    # actors - a list of the movie's cast
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Actor(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    movies = models.ManyToManyField(Movie, related_name="actors")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Class(models.Model):
    subject = models.CharField(max_length=45)
    description = models.TextField()
    students = models.ManyToManyField(Student, related_name="classes")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Student(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    # classes - a list of the students classes
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


# One to Many
# The foreign key field goes on the many side
# Name the field singular and default to the name of the related class
# Related name is the plural of the class you're in

# Many to Many
# The many to many field goes on either side
# Name the field plural and default to the name of the related class
# Related name is the plural of the class you're in