import { describe, it, expect, beforeEach, afterEach, jest} from "@jest/globals";

const repoStub = {
    count: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
};

await jest.unstable_mockModule("../../config/data-source.js", () => {
    return {
        AppDataSourcePostgres: {
            getRepository: () => repoStub,
        },
    };
});

const { serviceRepository } = await import("../../repositories/serviceRepository.mjs");

describe("Queue Repository", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe("getAllServices", () => {
        it("should return all services", async () => {
            const mockServices = [
                { id: 1, name: "Service 1" },
                { id: 2, name: "Service 2" },
            ];
            repoStub.find.mockResolvedValue(mockServices);

            const services = await serviceRepository.getAllServices();

            expect(services).toEqual(mockServices);
        });
    });

    describe("getAllServices with empty list", () => {
        it("should return an empty array when no services exist", async () => {
            repoStub.find.mockResolvedValue([]);
            const services = await serviceRepository.getAllServices();
            expect(services).toEqual([]);
        });
    });

});