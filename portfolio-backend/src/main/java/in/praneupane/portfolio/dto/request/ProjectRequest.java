package in.praneupane.portfolio.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.List;

public record ProjectRequest(
        @NotBlank(message = "Title is required")
        String title,

        @NotBlank(message = "Description is required")
        String description,

        @NotBlank(message = "GitHub Url is required")
        String githubUrl,

        String liveUrl,

        String imageUrl,

        @NotNull(message = "Technologies is required")
        List<String> technologies) {
}
