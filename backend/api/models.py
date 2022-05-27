from django.db import models

class Products(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    description = models.CharField(max_length=500, default='description is here')
    image = models.ImageField(upload_to="static")
    price = models.IntegerField()
    countInStock = models.IntegerField()
    brand = models.CharField(max_length=100)
    rating = models.IntegerField()
    numReviews = models.IntegerField()


