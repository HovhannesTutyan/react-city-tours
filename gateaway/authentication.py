import jwt
from django.conf import settings
from datetime import datetime
from rest_framework.authentication import BaseAuthentication
from api.models import CustomUser


class Authentication(BaseAuthentication):

    def authenticate(self, request):
        data = self.validate_request(request.headers)
        if not data:
            return None, None
        return self.get_user(data["email"]), None

    def get_user(self, user_email):
        try:
            user = CustomUser.objects.get(email=user_email)
            return user
        except Exception:
            return None

    def validate_request(self, headers):
        authorization = headers.get("Cookie", None)
        if not authorization:
            return None
        token = (headers["Cookie"])
        decoded_data = Authentication.verify_token(token)
        if not decoded_data:
            return None
        return decoded_data

    @staticmethod
    def verify_token(token):
        # decode the token
        try:
            decoded_data = jwt.decode(token, settings.SECRET_KEY, algorithms="HS256")
        except Exception:
            return None
        # check if token has expired
        exp = decoded_data["exp"]
        if datetime.now().timestamp() > exp:
            return None
        return decoded_data
