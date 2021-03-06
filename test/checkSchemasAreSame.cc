/*
  @copyright Steve Keen 2016
  @author Russell Standish
  This file is part of Minsky.

  Minsky is free software: you can redistribute it and/or modify it
  under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  Minsky is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with Minsky.  If not, see <http://www.gnu.org/licenses/>.
*/

#include "schema1.h"
#include "ecolab_epilogue.h"
#include <iostream>
#undef NDEBUG
#include <assert.h>
using namespace schema1;
using namespace std;

int main(int argc, const char*argv[])
{
  if (argc<3)
    {
      printf("usage: %s x.mky y.mky",argv[0]);
      return 1;
    }
  
  ifstream if1(argv[1]), if2(argv[2]);
  xml_unpack_t x1(if1), x2(if2);
  Minsky m1, m2;
  xml_unpack(x1,"Minsky",m1);
  xml_unpack(x2,"Minsky",m2);
  assert(m1.model.wires.size()==m2.model.wires.size());
  assert(m1.model.notes.size()==m2.model.notes.size());
  assert(m1.model.operations.size()==m2.model.operations.size());

//  map<string,int> v1cnt, v2cnt;
//  for (auto i: m1.model.variables)
//    v1cnt[i.name]++;
//   for (auto i: m2.model.variables)
//    v2cnt[i.name]++;
//
//   for (auto& i: v1cnt) cout << i.first << " " << i.second << " " << v2cnt[i.first] << endl;
   
  assert(m1.model.variables.size()==m2.model.variables.size());
  assert(m1.model.plots.size()==m2.model.plots.size());
  assert(m1.model.groups.size()==m2.model.groups.size());
  assert(m1.model.switches.size()==m2.model.switches.size());
  assert(m1.model.godleys.size()==m2.model.godleys.size());
  assert(m1.model.validate());
  pack_t b1, b2;
  b1<<m1.model.rungeKutta;
  b2<<m2.model.rungeKutta;
  assert(b1.size()==b2.size());
  assert(memcmp(b1.data(),b2.data(),b1.size())==0);
  assert(m1.layout.size()==m2.layout.size());
  // TODO - renumber items in canonical network order.
  return 0;
}
