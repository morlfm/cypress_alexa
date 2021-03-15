 FROM cypress/browsers:node12.14.1-chrome83-ff77

 ENV APP_HOME /app
 ENV HOME /root
 RUN mkdir $APP_HOME
 WORKDIR $APP_HOME

 COPY . $APP_HOME
 RUN npm install
 CMD ["./node_modules/.bin/cypress run --browser firefox"]
