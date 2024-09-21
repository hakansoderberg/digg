export const apiDocs = {
  openapi: "3.0.0",
  info: {
    title: "Digg Project",
    version: "1.0.0",
    description: "Create and get users!",
  },
  servers: [
    {
      url: "http://localhost:3001",
    },
  ],
  paths: {
    '/digg/health': {
      get: {
        summary: 'Check health of application',
        responses: {
          '200': {
            description: 'Returns UP if its running',
          },
          '500': {
            description: 'Something went wrong',
          },
        },
      },
    },
    '/digg/user/': {
      get: {
        summary: 'Get users page',
        parameters: [
          {
            in: 'query',
            name: 'limit',
            schema: {
              type: 'number',
            },
            description: 'Amount of users per page',
            example:5
          },
          {
            in: 'query',
            name: 'page',
            schema: {
              type: 'number',
            },
            description: 'Selected page',
            example:1
          },
        ],
        responses: {
          '200': {
            description: 'A list of users with information about pagination',
          },
          '500': {
            description: 'Something went wrong',
          },
        },
      },
    },
    "/digg/user": {
      post: {
        summary: "Create a new user",
        description: "Creates a new user",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    description: "Name of the user",
                    example: "John Doe",
                  },
                  email: {
                    type: "string",
                    format: "email",
                    description: "Email of the user",
                    example: "john.doe@example.com",
                  },
                  phoneNumber: {
                    type: "string",
                    description: "Phone number of the user",
                    example: "070-1234567",
                  },
                  address: {
                    type: "string",
                    description: "Address of the user",
                    example: "123 Main St, 10010, City, Country",
                  },
                },
                required: ["name", "email", "phoneNumber", "address"],
              },
            },
          },
        },
        responses: {
          "201": {
            description: "User successfully created",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: {
                      type: "boolean",
                    },
                    result: {
                      type: "string",
                      description: "Confirmation message",
                      example: "User successfully created",
                    },
                  },
                },
              },
            },
          },
          "500": {
            description: "Something unexpected happened",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: {

                      type: "boolean",
                      example:false,
                    },
                    error: {
                      type: "string",
                      description: "Error message",
                      example: "Something went wrong",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
