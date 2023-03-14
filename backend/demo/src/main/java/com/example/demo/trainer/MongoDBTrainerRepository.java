package com.example.demo.trainer;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MongoDBTrainerRepository extends MongoRepository<Trainer, ObjectId> {
    Trainer findTrainerById(String trainerId);

}
