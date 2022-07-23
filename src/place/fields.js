import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    DateInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    'ns2:places_nagpra': {
      [config]: {
        service: {
          ns: 'http://collectionspace.org/services/place/domain/nagpra',
        },
      },
      basicInfoList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        basicInfo: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.places_nagpra.basicInfo.name',
                defaultMessage: 'Basic information',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
      },
      nagpraHistoryList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        nagpraHistory: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.places_nagpra.nagpraHistory.name',
                defaultMessage: 'NAGPRA inventory history',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
      },
      backgroundSummaryList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        backgroundSummary: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.places_nagpra.backgroundSummary.name',
                defaultMessage: 'Background and records summary',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
      },
      landOwnershipInfoList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        landOwnershipInfo: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.places_nagpra.landOwnershipInfo.name',
                defaultMessage: 'Land ownership information',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
      },
      assertionGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        assertionGroup: {
          [config]: {
            repeating: true,
            view: {
              type: CompoundInput,
            },
          },
          assertionName: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.places_nagpra.assertionName.name',
                  defaultMessage: 'Assertion name',
                },
              }),
              view: {
                type: TermPickerInput,
                props: {
                  source: 'nagpraassertionnames',
                },
              },
            },
          },
          assertionDescription: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.places_nagpra.assertionDescription.name',
                  defaultMessage: 'Assertion description',
                },
              }),
              view: {
                type: TextInput,
                props: {
                  multiline: true,
                },
              },
            },
          },
          assertionSourceGroupList: {
            [config]: {
              view: {
                type: CompoundInput,
              },
            },
            assertionSourceGroup: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.places_nagpra.assertionSourceGroup.name',
                    defaultMessage: 'Assertion source',
                  },
                }),
                repeating: true,
                view: {
                  type: CompoundInput,
                  props: {
                    tabular: true,
                  },
                },
              },
              assertionSourceBy: {
                [config]: {
                  messages: defineMessages({
                    name: {
                      id: 'field.places_nagpra.assertionSourceBy.name',
                      defaultMessage: 'By',
                    },
                    fullName: {
                      id: 'field.places_nagpra.assertionSourceBy.fullName',
                      defaultMessage: 'Assertion by',
                    },
                  }),
                  view: {
                    type: AutocompleteInput,
                    props: {
                      source: 'person/local,person/shared,person/ulan,organization/local,organization/shared,organization/ulan',
                    },
                  },
                },
              },
              assertionSourceDate: {
                [config]: {
                  messages: defineMessages({
                    fullName: {
                      id: 'field.places_nagpra.assertionSourceDate.fullName',
                      defaultMessage: 'Assertion source date',
                    },
                    name: {
                      id: 'field.places_nagpra.assertionSourceDate.name',
                      defaultMessage: 'Date',
                    },
                  }),
                  view: {
                    type: DateInput,
                  },
                },
              },
              assertionSourceNote: {
                [config]: {
                  messages: defineMessages({
                    fullName: {
                      id: 'field.places_nagpra.assertionSourceNote.fullName',
                      defaultMessage: 'Assertion source note',
                    },
                    name: {
                      id: 'field.places_nagpra.assertionSourceNote.name',
                      defaultMessage: 'Note',
                    },
                  }),
                  view: {
                    type: TextInput,
                  },
                },
              },
            },
          },
          assertionRelatedRecords: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.places_nagpra.assertionRelatedRecords.name',
                  defaultMessage: 'Museum records',
                },
              }),
              view: {
                type: TextInput,
                props: {
                  multiline: true,
                },
              },
            },
          },
          assertionReferenceGroupList: {
            [config]: {
              view: {
                type: CompoundInput,
              },
            },
            assertionReferenceGroup: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.places_nagpra.assertionReferenceGroup.name',
                    defaultMessage: 'Reference',
                  },
                }),
                repeating: true,
                view: {
                  type: CompoundInput,
                  props: {
                    tabular: true,
                  },
                },
              },
              assertionReference: {
                [config]: {
                  messages: defineMessages({
                    fullName: {
                      id: 'field.places_nagpra.assertionReference.fullName',
                      defaultMessage: 'Assertion reference name',
                    },
                    name: {
                      id: 'field.places_nagpra.assertionReference.name',
                      defaultMessage: 'Name',
                    },
                  }),
                  view: {
                    type: AutocompleteInput,
                    props: {
                      source: 'citation/local,citation/worldcat',
                    },
                  },
                },
              },
              assertionReferenceNote: {
                [config]: {
                  messages: defineMessages({
                    fullName: {
                      id: 'field.places_nagpra.assertionReferenceNote.fullName',
                      defaultMessage: 'Assertion refence note',
                    },
                    name: {
                      id: 'field.places_nagpra.assertionReferenceNote.name',
                      defaultMessage: 'Note',
                    },
                  }),
                  view: {
                    type: TextInput,
                  },
                },
              },
            },
          },
        },
      },
      museumRecordsList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        museumRecords: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.places_nagpra.museumRecordsList.name',
                defaultMessage: 'Museum records',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
      },
      manuscriptGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        manuscriptGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.places_nagpra.manuscriptGroup.name',
                defaultMessage: 'Unpublished manuscript',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
              props: {
                tabular: true,
              },
            },
          },
          manuscriptReferences: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.places_nagpra.manuscriptReferences.fullName',
                  defaultMessage: 'Unpublished manuscript reference',
                },
                name: {
                  id: 'field.places_nagpra.manuscriptReferences.name',
                  defaultMessage: 'Reference',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'citation/local,',
                },
              },
            },
          },
          manuscriptNote: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.places_nagpra.manuscriptNote.fullName',
                  defaultMessage: 'Unpublished manuscript note',
                },
                name: {
                  id: 'field.places_nagpra.manuscriptNote.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
      reportRefGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        reportRefGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.places_nagpra.reportRefGroup.name',
                defaultMessage: 'Published report',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
              props: {
                tabular: true,
              },
            },
          },
          reportReferences: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.places_nagpra.reportReferences.fullName',
                  defaultMessage: 'Published report reference',
                },
                name: {
                  id: 'field.places_nagpra.reportReferences.name',
                  defaultMessage: 'Reference',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'citation/local',
                },
              },
            },
          },
          reportNote: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.places_nagpra.reportNote.fullName',
                  defaultMessage: 'Published report note',
                },
                name: {
                  id: 'field.places_nagpra.reportNote.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
    },
  };
};
