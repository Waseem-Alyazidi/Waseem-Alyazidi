# API Documentation

## Overview
The Home API provides the data required to render the Home page and exposes the current Home data version used by the frontend cache system.

### Base URL
`api/`

## Home Data
**GET** `/home-data`
Returns the complete Home page data together with its current version.

### Request
```
GET /api/home-data
```
### Response
`OK 200`
```
{
  "version": "1.0.0",
  "data": { ... }
}
```

| Field | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `version` | string | Yes | Current version of the Home data. |
| `data` | object | Yes | Complete Home page data. |

### Example
```
{
  "version": "1.0.0",
  "data": {
    "hero"        : { ... },
    "about"       : { ... },
    "skills"      : { ... },
    "projects"    : { ... },
    "education"   : { ... },
    "certificates": { ... },
    "experience"  : { ... },
    "contact"     : { ... },
    "footer"      : { ... }
  }
}
```
The exact structure of `data` may evolve independently as the Home page data model changes.

## Home Data Version
**GET** `/home-data-version`
Returns the current version of the Home page data.
This endpoint is used by the frontend to determine whether the locally cached Home data is still valid.

### Request
```
GET /api/home-data-version
```

### Response
`OK 200`
```
"1.0.0"
```

### Response Type
`String`

### Description
The returned `version` must match the version field returned by `/home-data`.

### Version Consistency Requirement
The version returned by `/home-data-version` must match the version field returned by `/home-data`.
A version change indicates that the cached Home data should no longer be considered current.
