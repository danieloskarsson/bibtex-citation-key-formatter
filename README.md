Tampermonkey/Greasemonkey user script that formats the bibtex citation-key provided by Google Scholar

### Example

Given:

```
@article{thorgeirsson2010sequence,
    title={Sequence variants at CHRNB3--CHRNA6 and CYP2A6 affect smoking behavior},
    author={Thorgeirsson, Thorgeir E and Gudbjartsson, Daniel F and Surakka, Ida and Vink, Jacqueline M and Amin, Najaf and Geller, Frank and Sulem, Patrick and Rafnar, Thorunn and Esko, T{\~o}nu and Walter, Stefan and others},
    journal={Nature genetics},
    volume={42},
    number={5},
    pages={448},
    year={2010},
    publisher={Nature Publishing Group}
  }
```

`thorgeirsson2010sequence` will be replaced with `ThorgeirssonGudbjartssonSurakkaVinkAminGellerSulemRafnarEskoWalter2010`

Modified:

```
@article{ThorgeirssonGudbjartssonSurakkaVinkAminGellerSulemRafnarEskoWalter2010,
    title={Sequence variants at CHRNB3--CHRNA6 and CYP2A6 affect smoking behavior},
    author={Thorgeirsson, Thorgeir E and Gudbjartsson, Daniel F and Surakka, Ida and Vink, Jacqueline M and Amin, Najaf and Geller, Frank and Sulem, Patrick and Rafnar, Thorunn and Esko, T{\~o}nu and Walter, Stefan and others},
    journal={Nature genetics},
    volume={42},
    number={5},
    pages={448},
    year={2010},
    publisher={Nature Publishing Group}
  }
```
