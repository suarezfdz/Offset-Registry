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

--CREATE TABLE emissions (
--    id SERIAL PRIMARY KEY,
--    book_id VARCHAR(20), -- Adjust the data type and size as needed
--    LEI VARCHAR(20),
--    registered_name VARCHAR(255),
--    emission_source VARCHAR(255),
--    subsidiary_company_lei VARCHAR(20),
--    subsidiary_company_name VARCHAR(255),
--    country_of_emission VARCHAR(100),
--    state_or_province_of_emission VARCHAR(100),
--    location_of_emission VARCHAR(255),
--    postal_code_of_emission VARCHAR(20),
--    scope_of_emission VARCHAR(255),
--    emission_activity_type VARCHAR(255),
--    scope2_provider_legal_name VARCHAR(255),
--    scope2_provider_address VARCHAR(255),
--    scope2_provider_postal_code VARCHAR(20),
--    scope2_provider_lei VARCHAR(20),
--    scope3_supplier_legal_name VARCHAR(255),
--    scope3_supplier_address VARCHAR(255),
--    scope3_supplier_postal_code VARCHAR(20),
--    scope3_provider_lei VARCHAR(20)
--);

DROP TABLE emissions;
DROP TABLE samso_offset_projects;
DROP TABLE samso_books;

CREATE TABLE samso_books (
    id SERIAL PRIMARY KEY,
    entity VARCHAR(255),
    lei VARCHAR(20),
    base DECIMAL(10),
    target DECIMAL(10),
    latest DATE,
    status VARCHAR(50),
    emissions DECIMAL(10, 2),
    offsets DECIMAL(10, 2),
    securities DECIMAL(10, 2),
    total_net DECIMAL(10, 2),
    type VARCHAR(20),
    parent DECIMAL(10)
);

CREATE TABLE samso_offset_projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    reference VARCHAR(255),
    status VARCHAR(255),
    available_credits INTEGER,
    registry VARCHAR(255),
    type VARCHAR(255),
    methodology VARCHAR(255),
    region VARCHAR(255),
    developer VARCHAR(255),
    category VARCHAR(50) NOT NULL,
    year INT NOT NULL,
    book_id INT REFERENCES samso_books(id)
);

CREATE TABLE emissions (
    emission_id SERIAL PRIMARY KEY,
    book_id INT REFERENCES samso_books(id),
    category INT NOT NULL,
    activity VARCHAR(50) NOT NULL,
    year INT NOT NULL,
    emission_value DECIMAL(10, 2)
);


INSERT INTO samso_books (entity, lei, base, target, latest, status, emissions, offsets, securities, total_net, type, parent)
VALUES
('State Street',        'LEI123456789', 2010, 2030, '2022-01-01', 'PENDING VERIFICATION', 0.0, 0.0, 0.0, 0.0, 'Parent',  NULL),
('State Street IT',     'LEI987654321', 2015, 2029, '2022-01-01', 'PENDING VERIFICATION', 0.0, 0.0, 0.0, 0.0, 'Child',   1),
('State Street UK',     'LEI234567890', 2018, 2033, '2022-01-01', 'VERIFIED', 0.0, 0.0, 0.0, 0.0, 'Child',   1),
('State Street ES',     'LEI098765432', 2012, 2028, '2022-01-01', 'PENDING VERIFICATION', 0.0, 0.0, 0.0, 0.0, 'Child',   1),
('State Street GE',     'LEI567890123', 2016, 2025, '2022-01-01', 'UN-VERIFIED', 0.0, 0.0, 0.0, 0.0, 'Child',   1),
('Apple',               'LEI345678901', 2010, 2030, '2022-01-01', 'PENDING VERIFICATION', 0.0, 0.0, 0.0, 0.0, 'Parent',  NULL),
('Apple ES',            'LEI789012345', 2012, 2026, '2022-01-01', 'VERIFIED', 0.0, 0.0, 0.0, 0.0, 'Child',   6),
('Apple IT',            'LEI210987654', 2015, 2025, '2022-01-01', 'UN-VERIFIED', 0.0, 0.0, 0.0, 0.0, 'Child',   6),
('Porsche',             'LEI543210876', 2011, 2026, '2022-01-01', 'VERIFIED', 0.0, 0.0, 0.0, 0.0, 'Parent',   NULL),
('Porsche IT',          'LEI678901234', 2020, 2030, '2022-01-01', 'VERIFIED', 0.0, 0.0, 0.0, 0.0, 'Child',   9);



CREATE OR REPLACE FUNCTION update_emissions()
RETURNS TRIGGER AS $$
BEGIN
    -- Update child samso_book's emissions
    UPDATE samso_books
    SET emissions = emissions + NEW.emission_value
    WHERE id = NEW.book_id;

    -- Update parent samso_book's emissions
    UPDATE samso_books
    SET emissions = emissions + NEW.emission_value
    WHERE id = (SELECT parent FROM samso_books WHERE id = NEW.book_id);

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_emissions
AFTER INSERT ON emissions
FOR EACH ROW
EXECUTE FUNCTION update_emissions();


CREATE OR REPLACE FUNCTION update_offset_projects()
RETURNS TRIGGER AS $$
BEGIN
    -- Update child samso_book's emissions
    UPDATE samso_books
    SET offsets = offsets + 1
    WHERE id = NEW.book_id;

    -- Update parent samso_book's emissions
    UPDATE samso_books
    SET offsets = offsets + 1
    WHERE id = (SELECT parent FROM samso_books WHERE id = NEW.book_id);

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_offsets
AFTER INSERT ON samso_offset_projects
FOR EACH ROW
EXECUTE FUNCTION update_offset_projects();

INSERT INTO emissions (book_id, category, activity, year, emission_value)
VALUES
  -- 2020
  (2, 1, 'Stationary',  2020, 6.00),
  (2, 1, 'Mobile',      2020, 10.00),
  (2, 1, 'Fugitive',    2020, 3.00),
  (2, 1, 'Other',       2020, 3.00),

  (2, 2, 'Stationary',  2020, 6.00),
  (2, 2, 'Mobile',      2020, 2.00),
  (2, 2, 'Fugitive',    2020, 3.00),
  (2, 2, 'Other',       2020, 1.00),

  (3, 3, 'Stationary',  2020, 3.00),
  (3, 3, 'Mobile',      2020, 4.00),
  (3, 3, 'Fugitive',    2020, 3.00),
  (3, 3, 'Other',       2020, 2.00),

  -- 2021
  (2, 1, 'Stationary',  2021, 6.00),
  (2, 1, 'Mobile',      2021, 8.00),
  (2, 1, 'Fugitive',    2021, 3.00),
  (2, 1, 'Other',       2021, 3.00),

  (4, 2, 'Stationary',  2021, 4.00),
  (4, 2, 'Mobile',      2021, 2.00),
  (4, 2, 'Fugitive',    2021, 3.00),
  (4, 2, 'Other',       2021, 1.00),

  (2, 3, 'Stationary',  2021, 3.00),
  (2, 3, 'Mobile',      2021, 4.00),
  (2, 3, 'Fugitive',    2021, 3.00),
  (2, 3, 'Other',       2021, 2.00),

  -- 2022
  (3, 1, 'Stationary',  2022, 6.00),
  (3, 1, 'Mobile',      2022, 7.00),
  (3, 1, 'Fugitive',    2022, 3.00),
  (3, 1, 'Other',       2022, 3.00),

  (3, 2, 'Stationary',  2022, 1.00),
  (3, 2, 'Mobile',      2022, 3.00),
  (3, 2, 'Fugitive',    2022, 3.00),
  (3, 2, 'Other',       2022, 2.00);

-- Retrieves the emissions by category and year
select category, year, sum(emission_value) from emissions group by category, year order by year, category;


INSERT INTO samso_offset_projects (name, reference, status, available_credits, registry, type, methodology, region, developer, book_id, category, year) VALUES
    ('Advanced Refrigeration - ARS2021002', 'REF123', 'Active',   1000, 'RegistryA', 'TypeA', 'MethodologyA', 'RegionA', 'DeveloperA',    2, 'Offset MER', 2023),
    ('Project2', 'REF456', 'Inactive',                            500,  'RegistryB', 'TypeB', 'MethodologyB', 'RegionB', 'DeveloperB',    2, 'Offset VER', 2022),
    ('Project3', 'REF789', 'Active',                              750,  'RegistryC', 'TypeC', 'MethodologyC', 'RegionC', 'DeveloperC',    3, 'Offset VER', 2022);
