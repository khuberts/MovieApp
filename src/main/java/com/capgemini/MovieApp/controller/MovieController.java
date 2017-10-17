package com.capgemini.MovieApp.controller;

import com.capgemini.MovieApp.model.Movie;
import com.capgemini.MovieApp.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class MovieController {

    @Autowired
    private MovieRepository movieRepository;

    /**
     * Function that get all the existing movies in the database.
     * @return An Iterable of all the movies
     */
    @RequestMapping(value = "/api/movie" , method = RequestMethod.GET)
    @ResponseBody
    public Iterable<Movie> movieList() {
        return movieRepository.findAll();
    }

    /**
     * Function that adds a movie to the database
     * @param movie the movie that has to be saved
     * @return Returns the movie that is saved
     */
    @RequestMapping(value = "/api/movie", method = RequestMethod.POST)
    public Movie addMovie(@RequestBody Movie movie) {
        movieRepository.save(movie);
        return movie;
    }

    /**
     *  Function that deletes a movie
     * @param movie the movie that must be deleted
     * @return Returns the movie that is deleted
     */
    @RequestMapping(value = "/api/movie", method = RequestMethod.DELETE)
    public Movie deleteMovie(@RequestBody Movie movie) {

        movieRepository.delete(movie);
        return movie;
    }

    /**
     * Function to update the movie details
     * @param movie the updated movie details that have to be saved
     * @return the updated movie
     */
    @RequestMapping(value = "/api/movie", method = RequestMethod.PUT)
    public Movie updateMovie(@RequestBody Movie movie) {

        movieRepository.save(movie);
        return movie;
    }
}
