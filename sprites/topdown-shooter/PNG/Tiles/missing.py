#!/usr/bin/env python
import os, sys

for i in range(1, 540):
  name = 'tile_{0:02d}.png'.format(i)
  if not os.path.exists(name):
    print 'cp blank.png %s' % name
 