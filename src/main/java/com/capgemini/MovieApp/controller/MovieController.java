package com.capgemini.MovieApp.controller;

import com.capgemini.MovieApp.model.Movie;
import com.capgemini.MovieApp.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MovieController {

    @Autowired
    private MovieRepository movieRepository;

    @RequestMapping(value = "/api/guest" , method = RequestMethod.GET)
    @ResponseBody
    public Iterable<Movie> guestList() {
        return movieRepository.findAll();
    }
}
