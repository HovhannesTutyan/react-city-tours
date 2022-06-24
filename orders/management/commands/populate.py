from django.core.management import BaseCommand
from faker import Faker
from orders.models import Order
from random import randrange

class Command(BaseCommand):
    def handle(self, *args, **options):
        faker = Faker()

        for _ in range(10):
            Order.objects.create(
                status = "processed",
                user = 'user1',
                full_name = faker.name(),
                address_line_1 = faker.text(200),
                address_line_2=faker.image_url(),
                city = randrange(10, 100),
                state_province_region = faker.name(),
                postal_zip_code = faker.random,
                country_region = faker.name(),
                telephone_number = faker.random,
                shipping_name = faker.name(),
                shipping_time = faker.random,
                shipping_price = faker.random,
                date_issued = faker.random
            )
