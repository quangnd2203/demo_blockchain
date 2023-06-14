FROM node
 
WORKDIR /app

COPY . .

EXPOSE 4000

EXPOSE 3000

CMD ["npm", "run", "start"]
