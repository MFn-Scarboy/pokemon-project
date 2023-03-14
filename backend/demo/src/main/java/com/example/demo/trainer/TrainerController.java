package com.example.demo.trainer;

import com.example.demo.pokemon.Pokemon;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping()
public class TrainerController {
    @Autowired
    TrainerRepository repository;

    @GetMapping()
    ResponseEntity<List<Trainer>> listAllTrainers() {
        return new ResponseEntity<>(repository.listTrainers(), HttpStatus.OK);
    }

    @GetMapping(path="{id}")
    ResponseEntity<Trainer> getTrainerById(@PathVariable String id) {
        return new ResponseEntity<>(repository.getTrainerById(id), HttpStatus.OK);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<Trainer> addNewTrainer(@RequestBody Trainer trainer) {
        if (repository.getTrainerById(trainer.getId()) != null) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(repository.saveTrainer(trainer), HttpStatus.OK);
    }

    @PostMapping(path="{id}/pokemon")
    ResponseEntity<Trainer> addPokemonToTrainer(@PathVariable String id, @RequestBody Pokemon pokemon) {
        Trainer trainer = repository.getTrainerById(id);
        if(trainer.getPokemon().size() >= 6) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        List<Pokemon> listOfPokemon = trainer.getPokemon();
        listOfPokemon.add(pokemon);

        trainer.setPokemon(listOfPokemon);
        return new ResponseEntity<>(repository.saveTrainer(trainer), HttpStatus.OK);
    }



    @DeleteMapping(path="{id}")
    ResponseEntity<Trainer> removeTrainer(@PathVariable String id) {
        Trainer trainer = repository.getTrainerById(id);
        if (trainer == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        repository.deleteTrainer(trainer);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

//    @DeleteMapping("/{id}/pokemon")
//    ResponseEntity<Trainer> removePokemonFromTrainer(@PathVariable String id, @RequestBody String pokemonId) {
//        Trainer trainer = repository.getTrainerById(id);
//        review.setUpvotes(Arrays.stream(review.getUpvotes())
//                .filter(it -> !it.equals(name)).toArray(String[]::new));
//        review.setNumberOfUpvotes(review.getUpvotes().length);
//        repository.saveProductReview(review);
//        return new ResponseEntity<>(repository.getReviewById(ids), HttpStatus.OK);
//    }


}
