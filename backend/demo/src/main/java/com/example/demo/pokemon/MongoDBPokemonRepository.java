package com.example.demo.pokemon;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MongoDBPokemonRepository extends MongoRepository<Pokemon, ObjectId> {
}
