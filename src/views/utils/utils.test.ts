import { filterEntriesData } from './utils';

// filterEntriesData
    const mockEntriesObject = {
        kind: 'some kind',
        data: {
            after: 'id 1',
            dist: 10,
            modhash: 'modhash 1',
            geo_filter: 'geo 1',
            children: [
                {
                    data: {
                        property1: 'entry 1 prop 1',
                        property2: 'entry 1 prop 2',
                        property3: 'entry 1 prop 3',
                    },
                },
                {
                    data: {
                        property1: 'entry 2 prop 1',
                        property2: 'entry 2 prop 2',
                        property3: 'entry 2 prop 3',
                    }
                },
            ],
            before: 'id 10',
        },
    };

    describe('filterEntriesData function tests', () => {
        test('Filtering to empty target array should return array with empty objects', () => {
            const emptyTargetProperties: string[] = [];
            expect(filterEntriesData(mockEntriesObject, emptyTargetProperties)).toEqual([{}, {}]);
        });

        test('Filtering to normal target array should return array of objects with filtered properties', () => {
            const targetProperties = ['property1'];
            expect(filterEntriesData(mockEntriesObject, targetProperties)).toEqual([{property1: 'entry 1 prop 1'}, {property1: 'entry 2 prop 1'}]);
        });

        test('Filtering to target array containing all properties should return array of objects with all properties', () => {
            const targetProperties = ['property1', 'property2', 'property3'];
            expect(filterEntriesData(mockEntriesObject, targetProperties)).toEqual([
                {property1: 'entry 1 prop 1', property2: 'entry 1 prop 2', property3: 'entry 1 prop 3',},
                {property1: 'entry 2 prop 1', property2: 'entry 2 prop 2', property3: 'entry 2 prop 3',}
                ]
            );
        });
    })