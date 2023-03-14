package com.example.demo.trainer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TrainerRepository implements ITrainerRepository {

    MongoDBTrainerRepository repository;

    public TrainerRepository(@Autowired MongoDBTrainerRepository repository) {
        this.repository = repository;
    }

    public List<Trainer> listTrainers() {
        return Streamable.of(repository.findAll()).toList();
    }

    public Trainer getTrainerById(String trainerId) {
        return repository.findTrainerById(trainerId);
    }

//    public Trainer addPokemonToTrainer(String trainerId) {
//        return repository
//    }

    public Trainer saveTrainer(Trainer trainer) {
        if(trainer != null) {
            return repository.save(trainer);
        }
        return null;
    }

    public void deleteTrainer(Trainer trainer) {
        repository.delete(trainer);
    }
}
