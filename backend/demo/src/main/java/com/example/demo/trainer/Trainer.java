package com.example.demo.trainer;

import com.example.demo.pokemon.Pokemon;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
@Document
public class Trainer {

    @MongoId
    private String id;
    private String name;
    private List<Pokemon> pokemon;

    public Trainer(String id, String name, List<Pokemon> pokemon) {
        this.id = id;
        this.name = name;
        this.pokemon = pokemon;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Pokemon> getPokemon() {
        return pokemon;
    }

    public void setPokemon(List<Pokemon> pokemon) {
        this.pokemon = pokemon;
    }

}
