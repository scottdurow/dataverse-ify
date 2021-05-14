# Welcome to dataverse-ify

```text
       __      __                                        _ ____     
  ____/ /___ _/ /_____ __   _____  _____________        (_) __/_  __
 / __  / __ `/ __/ __ `/ | / / _ \/ ___/ ___/ _ \______/ / /_/ / / /
/ /_/ / /_/ / /_/ /_/ /| |/ /  __/ /  (__  )  __/_____/ / __/ /_/ / 
\__,_/\__,_/\__/\__,_/ |___/\___/_/  /____/\___/     /_/_/  \__, /  
                                                           /____/   
```

The TypeScript library that allows you to use the Microsoft Dataverse Xrm WebApi using IOrganizationService SDK like types.
Works with [dataverse-gen](https://www.npmjs.com/package/dataverse-gen) and [dataverse-auth](https://www.npmjs.com/package/dataverse-gen) to create early bound classes.

- [Introduction to dataverse-ify](https://github.com/scottdurow/dataverse-ify/wiki)
- [Quick Start](https://github.com/scottdurow/dataverse-ify/wiki/Quick-start)
- [Integration tests with dataverse-ify](https://github.com/scottdurow/dataverse-ify/wiki/Integration-testing-the-Xrm.WebApi-implementation)

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

to run the integration tests, you will need to install the test solution (that contains some custom attributes) that is found at `integration-test-solution\cdsifyintegrationtests_1_0_0_0_managed.zip`

Update the config file `config\test.yaml` with the org url of your environment, then run:

```text
jest integration-tests/
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
