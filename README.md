# Welcome to dataverse-ify

```text
       __      __                                        _ ____     
  ____/ /___ _/ /_____ __   _____  _____________        (_) __/_  __
 / __  / __ `/ __/ __ `/ | / / _ \/ ___/ ___/ _ \______/ / /_/ / / /
/ /_/ / /_/ / /_/ /_/ /| |/ /  __/ /  (__  )  __/_____/ / __/ /_/ / 
\__,_/\__,_/\__/\__,_/ |___/\___/_/  /____/\___/     /_/_/  \__, /  
                                                           /____/   
```

The TypeScript library that allows you to use the Microsoft Dataverse `Xrm.WebApi` using `IOrganizationService` SDK like types.
Works with [dataverse-gen](https://www.npmjs.com/package/dataverse-gen) and [dataverse-auth](https://www.npmjs.com/package/dataverse-gen) to create early bound classes.

> **NOTE**: This is version 2. For upgrading from version 1, see the article on [UPGRADING](/UPGRADING.md).

- [Introduction to dataverse-ify](docs/home.md)
- [Quick Start](docs/quick-start.md)
- [Integration tests with dataverse-ify](docs/integration-testing.md)
- [Why Metadata?](docs/why-metadata.md)
- [Using without DataverseClient](docs/using-without-service-client.md)

## Contributing

To build dataverse-ify locally you can fork the repo and then use:

```text
npm install
npm run build
```

There are both unit tests and integration tests.
To run the unit tests:

```text
npm test
```

to run the integration tests, you will need to install the test solution (that contains some custom attributes) that is found at `integration-test-solution\cdsifyintegrationtests.zip`

Update the config file `config\test.yaml` with the org url of your environment, then run:

```text
npm run integration-test
```

You can then test the library in your projects by using:

```text
npm link
```

In your project that uses dataverse-ify use:

```text
npm link dataverse-ify
```

Finally, unlink on the dataverse-ify project using:

```text
npm unlink dateverse-ify
```

Commit your changes to your fork and then submit a pull request for review.



### Upgrading from version 1 to 2?

You will need to make [some minor changes](UPGRADING.md).
