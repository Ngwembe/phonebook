import { TestBed } from '@angular/core/testing';

import { ItemRouteActivator } from './item-route-activator.service';

describe('ItemRouteActivatorService', () => {
  let service: ItemRouteActivator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemRouteActivator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
