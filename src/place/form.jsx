const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Panel,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="background" collapsible collapsed>
        <Field name="basicInfoList" subpath="ns2:places_nagpra">
          <Field name="basicInfo" />
        </Field>

        <Field name="nagpraHistoryList" subpath="ns2:places_nagpra">
          <Field name="nagpraHistory" />
        </Field>

        <Field name="backgroundSummaryList" subpath="ns2:places_nagpra">
          <Field name="backgroundSummary" />
        </Field>

        <Field name="landOwnershipInfoList" subpath="ns2:places_nagpra">
          <Field name="landOwnershipInfo" />
        </Field>
      </Panel>

      <Panel name="assertions" collapsible collapsed>
        <Field name="assertionGroupList" subpath="ns2:places_nagpra">
          <Field name="assertionGroup">
            <Panel>
              <Field name="assertionName" />
              <Field name="assertionDescription" />

              <Panel name="assertionInfo" collapsible>
                <Field name="assertionSourceGroupList">
                  <Field name="assertionSourceGroup">
                    <Field name="assertionSourceBy" />
                    <Field name="assertionSourceDate" />
                    <Field name="assertionSourceNote" />
                  </Field>
                </Field>

                <Field name="assertionRelatedRecords" />

                <Field name="assertionReferenceGroupList">
                  <Field name="assertionReferenceGroup">
                    <Field name="assertionReference" />
                    <Field name="assertionReferenceNote" />
                  </Field>
                </Field>
              </Panel>

            </Panel>
          </Field>
        </Field>
      </Panel>

      <Panel name="consultedDocs" collapsible collapsed>
        <Field name="museumRecordsList" subpath="ns2:places_nagpra">
          <Field name="museumRecords" />
        </Field>

        <Field name="manuscriptGroupList" subpath="ns2:places_nagpra">
          <Field name="manuscriptGroup">
            <Field name="manuscriptReferences" />
            <Field name="manuscriptNote" />
          </Field>
        </Field>

        <Field name="reportRefGroupList" subpath="ns2:places_nagpra">
          <Field name="reportRefGroup">
            <Field name="reportReferences" />
            <Field name="reportNote" />
          </Field>
        </Field>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
