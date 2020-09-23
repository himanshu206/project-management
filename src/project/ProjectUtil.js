class ProjectUtil {
  static transformProjects(projects) {
    return projects.map((project, projectIndex) => {
      const tasksWithIds = project.Tasks.map((task, taskIndex) => {
        return {
          id: `project_${projectIndex}_task_${taskIndex}`,
          description: task,
          isCompleted: false,
        };
      });

      return {
        id: `project_${projectIndex}`,
        name: project.Name,
        tasks: tasksWithIds,
      };
    });
  }
}

export default ProjectUtil;
