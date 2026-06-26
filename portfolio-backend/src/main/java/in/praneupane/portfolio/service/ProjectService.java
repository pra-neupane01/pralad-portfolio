package in.praneupane.portfolio.service;

import in.praneupane.portfolio.dto.response.PagedResponse;
import in.praneupane.portfolio.dto.response.ProjectResponse;
import in.praneupane.portfolio.entity.Project;
import in.praneupane.portfolio.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Service
@RestController
@RequestMapping("/projects")
@RequiredArgsConstructor
public class ProjectService {
    private final ProjectRepository projectRepository;

}
