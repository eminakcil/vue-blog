<template>
  <CRow>
    <CCol :md="12">
      <CCard class="mb-4">
        <CCardBody>
          <CRow>
            <CCol :sm="5">
              <h4 id="traffic" class="card-title mb-0">Traffic</h4>
              <div class="small text-medium-emphasis">January 2021</div>
            </CCol>
            <CCol :sm="7" class="d-none d-md-block">
              <CButton color="primary" class="float-end">
                <CIcon icon="cil-cloud-download" />
              </CButton>
              <CButtonGroup
                class="float-end me-3"
                role="group"
                aria-label="Basic outlined example"
              >
                <CButton color="secondary" variant="outline">Day</CButton>
                <CButton color="secondary" variant="outline" active
                  >Month</CButton
                >
                <CButton color="secondary" variant="outline">Year</CButton>
              </CButtonGroup>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>
