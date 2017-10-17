package com.capgemini.MovieApp.controller;

import com.capgemini.MovieApp.model.Movie;
import com.capgemini.MovieApp.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class MovieController {

    @Autowired
    private MovieRepository movieRepository;

    @RequestMapping(value = "/api/movie" , method = RequestMethod.GET)
    @ResponseBody
    public Iterable<Movie> movieList() {
        return movieRepository.findAll();
    }

    @RequestMapping(value = "/api/movie", method = RequestMethod.POST)
    public Movie process(@RequestBody Movie movie) {
        movieRepository.save(movie);
        return movie;
    }
}
