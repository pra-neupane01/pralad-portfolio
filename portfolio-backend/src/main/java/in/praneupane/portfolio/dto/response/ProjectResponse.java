package in.praneupane.portfolio.dto.response;

import lombok.Builder;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Builder
public record ProjectResponse(UUID id,
                              String title,
                              String description,
                              String githubUrl,
                              String liveUrl,
                              String imageUrl,
                              List<String> technologies,
                              LocalDateTime createdAt,
                              LocalDateTime updatedAt) {
}
