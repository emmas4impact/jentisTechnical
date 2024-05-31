export interface TestCase {
    id: string;
    description: string;
    steps: string[];
    expectedResult: string;
    isRegression: boolean;
}

export interface TestSuite {
    name: string;
    testCases: TestCase[];
}
