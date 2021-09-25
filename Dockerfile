From node:14
COPY . /app
WorkDir /app
RUN npm install
EXPOSE 5000 5001 
CMD ["bash","run.sh"]







