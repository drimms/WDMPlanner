export const clientTransponder = [
        {
            'title': 'BWN1000-V-C21X2T10-T',    
            'outputmax': 2,
            'outputmin': -2,
            'mode': {
                '40GEth' : 
                    [
                        '10G Any', 
                        '40GEth',
                        '16G FC'
                    ], 
                '40GE_100GE': 
                    [
                        '40GEth',
                        '100GE',
                        '10G Any',
                        '16G FC'
                    ],
                '40GE_16×10GE': 
                    [
                        '40GEth',
                        '10G Any',
                        '16G FC'
                    ], 
                'Hybrid':
                    [
                        '10G Any',
                        '16G FC',
                        'OTU2'
                    ],
                'Mapper': 
                    [
                        '10G Any',
                        '16G FC',
                    ],
                'Mapper_100GE':
                    [
                        '100GE',
                        '10G Any',
                        '16G FC'
                    ],
                'Mapper_3×32G FC':
                    [
                        '40GEth',
                        '100GE',
                        '32G FC',
                        '10G Any',
                        '16G FC'
                    ],
                'Mapper_6×32G FC':
                    [
                        '32G FC',
                    ],
                'Mapper_OTU4': 
                    [
                        'OTU4',
                        '10G Any',
                        '16G FC',
                    ],
                'OTN':
                    [
                        'OTU2'
                    ],
                'OTN_100GE':
                    [
                        '100GE',
                        'OTU2'
                    ], 
                'OTN_OTU4': 
                    [
                        'OTU2',
                        'OTU4'
                    ]
            },
            'payload': [
                '10GEth', 
                '40GEth',
                '16G FC', 
                '32G FC',
                '100GE',
                'OTU2',
                'OTU4',
            ]
        },
    ];