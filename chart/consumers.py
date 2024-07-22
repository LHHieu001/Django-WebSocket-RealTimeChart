import json
from random import randint
from time import sleep
from channels.generic.websocket import WebsocketConsumer

class Graph1(WebsocketConsumer):
    def connect(self):
        self.accept()
        
        for i in range(1000):
            self.send(json.dumps({'num': randint(-20,20)}))
            sleep(1)
        
        