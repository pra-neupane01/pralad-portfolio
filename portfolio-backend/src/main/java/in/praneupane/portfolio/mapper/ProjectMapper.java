package in.praneupane.portfolio.mapper;

import in.praneupane.portfolio.dto.request.ProjectRequest;
import in.praneupane.portfolio.dto.response.ProjectResponse;
import in.praneupane.portfolio.entity.Project;

public class ProjectMapper {
    public static Project toEntity(ProjectRequest projectRequest ){
        return Project.builder()
                .title(projectRequest.title())
                .description(projectRequest.description())
                .githubUrl(projectRequest.githubUrl())
                .imageUrl(projectRequest.githubUrl())
                .liveUrl(projectRequest.liveUrl())
                .imageUrl(projectRequest.imageUrl())
                .technologies(projectRequest.technologies())
                .build();

    }

    public static ProjectResponse toResponse(Project project){
        return ProjectResponse.builder()
                .id(project.getId())
                .title(project.getTitle())
                .description(project.getDescription())
                .imageUrl(project.getImageUrl())
                .liveUrl(project.getLiveUrl())
                .githubUrl(project.getGithubUrl())
                .technologies(project.getTechnologies())
                .createdAt(project.getCreatedAt())
                .build();
    }
}
