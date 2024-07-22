import json
from random import randint
from asyncio import sleep
from channels.generic.websocket import AsyncWebsocketConsumer

class Graph1(AsyncWebsocketConsumer):
     async def connect(self):
        await self.accept()
        
        for i in range(1000):
            await self.send(json.dumps({'num': randint(-20,20)}))
            await sleep(1)
        
        