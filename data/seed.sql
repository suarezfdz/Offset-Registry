DROP TABLE IF EXISTS RegistryOffsetProjects;
CREATE TABLE RegistryOffsetProjects (
    id SERIAL PRIMARY KEY,
    ProjectID VARCHAR(255),
    ProjectName VARCHAR(255),
    VoluntaryRegistry VARCHAR(255),
    ARBProject VARCHAR(255),
    VoluntaryStatus VARCHAR(255),
    Scope VARCHAR(255),
    Type VARCHAR(255),
    ReductionRemoval VARCHAR(255),
    MethodologyProtocol TEXT,
    Region VARCHAR(255),
    Country VARCHAR(255),
    State VARCHAR(255),
    ProjectSiteLocation TEXT,
    ProjectDeveloper VARCHAR(255),
    TotalCreditsIssued VARCHAR(20),
    TotalCreditsRetired VARCHAR(20),
    TotalCreditsRemaining VARCHAR(20),
    TotalBufferPoolDeposits VARCHAR(20),
    ReversalsCoveredByBufferPool VARCHAR(20),
    ReversalsNotCoveredByBuffer VARCHAR(20),
    FirstYearOfProject VARCHAR(20),
    CreditsIssuedByVintageYear1996 VARCHAR(20),
    CreditsIssuedByVintageYear1997 VARCHAR(20),
    CreditsIssuedByVintageYear1998 VARCHAR(20),
    CreditsIssuedByVintageYear1999 VARCHAR(20),
    CreditsIssuedByVintageYear2000 VARCHAR(20),
    CreditsIssuedByVintageYear2001 VARCHAR(20),
    CreditsIssuedByVintageYear2002 VARCHAR(20),
    CreditsIssuedByVintageYear2003 VARCHAR(20),
    CreditsIssuedByVintageYear2004 VARCHAR(20),
    CreditsIssuedByVintageYear2005 VARCHAR(20),
    CreditsIssuedByVintageYear2006 VARCHAR(20),
    CreditsIssuedByVintageYear2007 VARCHAR(20),
    CreditsIssuedByVintageYear2008 VARCHAR(20),
    CreditsIssuedByVintageYear2009 VARCHAR(20),
    CreditsIssuedByVintageYear2010 VARCHAR(20),
    CreditsIssuedByVintageYear2011 VARCHAR(20),
    CreditsIssuedByVintageYear2012 VARCHAR(20),
    CreditsIssuedByVintageYear2013 VARCHAR(20),
    CreditsIssuedByVintageYear2014 VARCHAR(20),
    CreditsIssuedByVintageYear2015 VARCHAR(20),
    CreditsIssuedByVintageYear2016 VARCHAR(20),
    CreditsIssuedByVintageYear2017 VARCHAR(20),
    CreditsIssuedByVintageYear2018 VARCHAR(20),
    CreditsIssuedByVintageYear2019 VARCHAR(20),
    CreditsIssuedByVintageYear2020 VARCHAR(20),
    CreditsIssuedByVintageYear2021 VARCHAR(20),
    CreditsIssuedByVintageYear2022 VARCHAR(20),
    CreditsIssuedByVintageYear2023 VARCHAR(20),
    CreditsRetiredIn1996 VARCHAR(20),
    CreditsRetiredIn1997 VARCHAR(20),
    CreditsRetiredIn1998 VARCHAR(20),
    CreditsRetiredIn1999 VARCHAR(20),
    CreditsRetiredIn2000 VARCHAR(20),
    CreditsRetiredIn2001 VARCHAR(20),
    CreditsRetiredIn2002 VARCHAR(20),
    CreditsRetiredIn2003 VARCHAR(20),
    CreditsRetiredIn2004 VARCHAR(20),
    CreditsRetiredIn2005 VARCHAR(20),
    CreditsRetiredIn2006 VARCHAR(20),
    CreditsRetiredIn2007 VARCHAR(20),
    CreditsRetiredIn2008 VARCHAR(20),
    CreditsRetiredIn2009 VARCHAR(20),
    CreditsRetiredIn2010 VARCHAR(20),
    CreditsRetiredIn2011 VARCHAR(20),
    CreditsRetiredIn2012 VARCHAR(20),
    CreditsRetiredIn2013 VARCHAR(20),
    CreditsRetiredIn2014 VARCHAR(20),
    CreditsRetiredIn2015 VARCHAR(20),
    CreditsRetiredIn2016 VARCHAR(20),
    CreditsRetiredIn2017 VARCHAR(20),
    CreditsRetiredIn2018 VARCHAR(20),
    CreditsRetiredIn2019 VARCHAR(20),
    CreditsRetiredIn2020 VARCHAR(20),
    CreditsRetiredIn2021 VARCHAR(20),
    CreditsRetiredIn2022 VARCHAR(20),
    CreditsRetiredIn2023 VARCHAR(20),
    YearUnknown INT,
    CreditsRemainingByVintageYear1996 VARCHAR(20),
    CreditsRemainingByVintageYear1997 VARCHAR(20),
    CreditsRemainingByVintageYear1998 VARCHAR(20),
    CreditsRemainingByVintageYear1999 VARCHAR(20),
    CreditsRemainingByVintageYear2000 VARCHAR(20),
    CreditsRemainingByVintageYear2001 VARCHAR(20),
    CreditsRemainingByVintageYear2002 VARCHAR(20),
    CreditsRemainingByVintageYear2003 VARCHAR(20),
    CreditsRemainingByVintageYear2004 VARCHAR(20),
    CreditsRemainingByVintageYear2005 VARCHAR(20),
    CreditsRemainingByVintageYear2006 VARCHAR(20),
    CreditsRemainingByVintageYear2007 VARCHAR(20),
    CreditsRemainingByVintageYear2008 VARCHAR(20),
    CreditsRemainingByVintageYear2009 VARCHAR(20),
    CreditsRemainingByVintageYear2010 VARCHAR(20),
    CreditsRemainingByVintageYear2011 VARCHAR(20),
    CreditsRemainingByVintageYear2012 VARCHAR(20),
    CreditsRemainingByVintageYear2013 VARCHAR(20),
    CreditsRemainingByVintageYear2014 VARCHAR(20),
    CreditsRemainingByVintageYear2015 VARCHAR(20),
    CreditsRemainingByVintageYear2016 VARCHAR(20),
    CreditsRemainingByVintageYear2017 VARCHAR(20),
    CreditsRemainingByVintageYear2018 VARCHAR(20),
    CreditsRemainingByVintageYear2019 VARCHAR(20),
    CreditsRemainingByVintageYear2020 VARCHAR(20),
    CreditsRemainingByVintageYear2021 VARCHAR(20),
    CreditsRemainingByVintageYear2022 VARCHAR(20),
    CreditsRemainingByVintageYear2023 VARCHAR(20),
    ProjectOwner VARCHAR(255),
    OffsetProjectOperator VARCHAR(255),
    AuthorizedProjectDesignee VARCHAR(255),
    Verifier VARCHAR(255),
    EstimatedAnnualEmissionReductions INT,
    PERs VARCHAR(255),
    RegistryARB VARCHAR(255),
    ARBProjectDetail VARCHAR(255),
    ARBID VARCHAR(255),
    ProjectListed VARCHAR(255),
    ProjectRegistered VARCHAR(255),
    CCB_Certifications TEXT,
    ProjectType VARCHAR(255),
    RegistryDocuments TEXT,
    ProjectWebsite VARCHAR(255),
    CreditsIssuedByIssuanceYear1996 VARCHAR(20),
    CreditsIssuedByIssuanceYear1997 VARCHAR(20),
    CreditsIssuedByIssuanceYear1998 VARCHAR(20),
    CreditsIssuedByIssuanceYear1999 VARCHAR(20),
    CreditsIssuedByIssuanceYear2000 VARCHAR(20),
    CreditsIssuedByIssuanceYear2001 VARCHAR(20),
    CreditsIssuedByIssuanceYear2002 VARCHAR(20),
    CreditsIssuedByIssuanceYear2003 VARCHAR(20),
    CreditsIssuedByIssuanceYear2004 VARCHAR(20),
    CreditsIssuedByIssuanceYear2005 VARCHAR(20),
    CreditsIssuedByIssuanceYear2006 VARCHAR(20),
    CreditsIssuedByIssuanceYear2007 VARCHAR(20),
    CreditsIssuedByIssuanceYear2008 VARCHAR(20),
    CreditsIssuedByIssuanceYear2009 VARCHAR(20),
    CreditsIssuedByIssuanceYear2010 VARCHAR(20),
    CreditsIssuedByIssuanceYear2011 VARCHAR(20),
    CreditsIssuedByIssuanceYear2012 VARCHAR(20),
    CreditsIssuedByIssuanceYear2013 VARCHAR(20),
    CreditsIssuedByIssuanceYear2014 VARCHAR(20),
    CreditsIssuedByIssuanceYear2015 VARCHAR(20),
    CreditsIssuedByIssuanceYear2016 VARCHAR(20),
    CreditsIssuedByIssuanceYear2017 VARCHAR(20),
    CreditsIssuedByIssuanceYear2018 VARCHAR(20),
    CreditsIssuedByIssuanceYear2019 VARCHAR(20),
    CreditsIssuedByIssuanceYear2020 VARCHAR(20),
    CreditsIssuedByIssuanceYear2021 VARCHAR(20),
    CreditsIssuedByIssuanceYear2022 VARCHAR(20),
    CreditsIssuedByIssuanceYear2023 VARCHAR(20),
    NotesFromRegistry TEXT,
    NotesFromBerkeleyCarbonTradingProject TEXT,
    AddedToDatabaseVersion VARCHAR(20),
    RowsHaveEquations1 VARCHAR(20),
    RowsHaveEquations2 VARCHAR(20),
    FirstIssuanceYearNoHardCodeHide VARCHAR(20)
);


