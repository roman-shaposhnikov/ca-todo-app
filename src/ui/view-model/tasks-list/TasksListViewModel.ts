import { TaskId } from "domain/task"
import {
  TasksListUiState,
  EmptyTasksListUiState,
  TasksListView,
  TasksLoadingUiState,
} from "./TasksListUiState"

export class TasksListViewModel {
  uiState:
    | TasksListUiState
    | EmptyTasksListUiState
    | TasksLoadingUiState

  switchView(view: TasksListView) {

  }

  completeTask(id: TaskId) {

  }

  removeTask(id: TaskId) {

  }

  removeAllCompleted() {

  }

  reopenTask(id: TaskId) {

  }
}
