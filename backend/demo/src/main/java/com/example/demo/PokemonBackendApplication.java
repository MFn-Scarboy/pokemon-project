package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories(basePackages = "com.example.demo")
public class PokemonBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(PokemonBackendApplication.class, args);
	}

}
