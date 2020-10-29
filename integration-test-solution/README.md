# Integration Tests
This folder contains the solution (managed and unmanaged) you will need to install
in order to integration test cdsify against CDS.

Integration tests differ from the unit tests in that they actually test the functionality
against CDS it's self rather than mocking the server calls.

To get integration tests running you will need to:
1. Create a auth token for your integration test environment:\
```
Use node-cds-auth org.crm.dynamics.com
```
2. Set the target environment in the integration test configuration at `\config\test.yaml`\
```
server:
  host: https://node-cds-auth org.crm.dynamics.com
```

3. Ensure integration tests are set to run in the same config
```
runIntegrationTests: true
```

4. From command line run jest tests
```
jest
```

5. Optionally you can run specific tests, e.g.
```
jest activity.test.ts
```