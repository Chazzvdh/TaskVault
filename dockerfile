FROM openjdk:21
WORKDIR /app
COPY target/springboot-0.0.1.jar /app
EXPOSE 8080
CMD ["java", "-jar", "springboot-0.0.1.jar"]