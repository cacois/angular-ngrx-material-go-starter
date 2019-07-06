package main

import "github.com/gin-gonic/gin"

func main() {
	router := gin.Default()

	type Task struct {
		ID          int    `json:"ID,sting"`
		Name        string `json:"Name"`
		Description string `json:"Description"`
	}

	/*===============
		API Endpoints
	===============*/
	router.GET("/api/healthz", func(context *gin.Context) {
		context.JSON(200, gin.H{
			"message": "pong",
		})
	})

	router.GET("/api/tasks", func(context *gin.Context) {
		var tasks [3]Task
		tasks[0] = Task{ID: 1, Name: "Task 1", Description: "Do something!"}
		tasks[1] = Task{ID: 2, Name: "Task 2", Description: "Do it again!"}
		tasks[2] = Task{ID: 3, Name: "Task 3", Description: "Do more stuff?"}

		context.JSON(200, tasks)
	})

	router.Run()
}
