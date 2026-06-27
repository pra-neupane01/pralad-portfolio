package in.praneupane.portfolio.service;


import in.praneupane.portfolio.dto.request.ProjectRequest;
import in.praneupane.portfolio.dto.response.ProjectResponse;
import in.praneupane.portfolio.entity.Project;
import in.praneupane.portfolio.mapper.ProjectMapper;
import in.praneupane.portfolio.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;
import java.util.UUID;


@Service
@RestController
@RequestMapping("/projects")
@RequiredArgsConstructor
public class ProjectService {
    private final ProjectRepository projectRepository;

    public ProjectResponse addProject(ProjectRequest projectRequest){
        Project project = ProjectMapper.toEntity(projectRequest);
        Project savedProject = projectRepository.save(project);
        return ProjectMapper.toResponse(savedProject);
    }

    public ProjectResponse updateProject(ProjectRequest projectRequest,
                                         UUID uuid){
        Project project= projectRepository.findById(uuid)
                .orElseThrow(()-> );
    }

}
